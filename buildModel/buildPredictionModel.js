const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const train = JSON.parse(fs.readFileSync('../testData/train.JSON'));
const test = JSON.parse(fs.readFileSync('../testData/test.JSON'));

/* These are adjustable parameters for training the model.  You can tweak these in order to
   change how to model behaves */

const ACTIVATION = 'relu';
const LEARNINGRATE = 0.0012;
const EPOCHS = 800;

// Defines the model
const model = tf.sequential();

// Creates the hidden layer.  The units can be tweaked to change the model.
model.add(tf.layers.dense({
  units: 8, 
  inputShape: [train.numberOfFeatures],
  activation: ACTIVATION,
}));

// Creates the output layer
model.add(tf.layers.dense({
  units: 1,
}));

model.summary();

// Sets up the model for training
model.compile({
  loss: tf.losses.meanSquaredError, 
  optimizer: tf.train.adam(LEARNINGRATE),
  metrics: ['mse']
});

// Creates the tensors for the training data
const inputTrain = tf.tensor(train.features, [train.output.length, train.numberOfFeatures]);
const outputTrain = tf.tensor(train.output, [train.output.length, 1]);


// Creates the tensors for the validation data
const inputTest = tf.tensor(test.features, [test.output.length, test.numberOfFeatures]); 
const outputTest = tf.tensor(test.output, [test.output.length, 1]);

/* Trains the model using the data.  Outputs several parameters to the console to verify
   the training is working and improving.  Then saves the model to a file. */

(async function () {
  const history = await model.fit(inputTrain, outputTrain, 
    { 
      epochs: EPOCHS, 
      validationData: [inputTest, outputTest],
    });
  fs.writeFileSync('../testData/History.json', JSON.stringify(history));
  console.log(history);
  console.log('number of samples: ',train.features.length/train.numberOfFeatures);
})().then(() => {
  console.log('training complete');
  model.predict(tf.tensor(test.features, [test.output.length, test.numberOfFeatures])).print();
  model.save('file://../model');
})
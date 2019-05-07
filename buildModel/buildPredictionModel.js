const tf = require('@tensorflow/tfjs');
const fs = require('fs');
const train = JSON.parse(fs.readFileSync('../testData/train.JSON'));
const test = JSON.parse(fs.readFileSync('../testData/test.JSON'));

// These are adjustable parameters for training the model
const ACTIVATION = 'relu6';
const LEARNINGRATE = 0.0018;
const EPOCHS = 700;

// Define a model
const model = tf.sequential();

// Creates the hidden layer
model.add(tf.layers.dense({
  units: 12, 
  inputShape: [train.numberOfFeatures],
  activation: ACTIVATION,
}));

// Creates the output layer
model.add(tf.layers.dense({
  units: 1,
}));

model.summary();
const learningRate = LEARNINGRATE;
const sgdOpt = tf.train.sgd(learningRate);

model.compile({
  loss: 'meanSquaredError', 
  optimizer: sgdOpt,
  metrics: ['mae']
});

// Create tensors for the training data
const inputTrain = tf.tensor(train.features, [train.output.length, train.numberOfFeatures]);
const outputTrain = tf.tensor(train.output, [train.output.length, 1]);


// Create tensors for the validation data
const inputTest = tf.tensor(test.features, [test.output.length, test.numberOfFeatures]); 
const outputTest = tf.tensor(test.output, [test.output.length, 1]);

// Trains the model using the data.
(async function () {
  const history = await model.fit(inputTrain, outputTrain, 
    { 
      epochs: EPOCHS, 
      validationData: [inputTest, outputTest],
    });
  fs.writeFileSync('../testData/History.json', JSON.stringify(history));
  console.log(history);
  console.log('number of samples: ',train.features.length/train.numberOfFeatures);
})().then(async ()=> {
  console.log('training complete');
  model.predict(tf.tensor(test.features, [test.output.length, test.numberOfFeatures])).print();
  const saveResult = await model.save(tf.io.browserHTTPRequest(
    'http://localhost:8000/api/getModel',
    {method: 'POST', headers: {'Content-type': 'application/json'}}));
})
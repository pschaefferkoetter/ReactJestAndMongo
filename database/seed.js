const db = require("./index");
const Test = require("./TestSchema");

const sampleTest = [
  {
    name: "Jenny",
    address: "Beverly Hills 90210",
    phoneNumber: "876-5309",
  },
  {
    name: "Tommy Tutone",
    address: "Penguin City",
    phoneNumber: "126-2431",
  },
];

const insertData = () => {
  Test.deleteMany({}).then(() => {
    console.log("Data has been removed from testDB");
    Test.create(sampleTest).then(() => {
      console.log("Database populated with sample data");
      db.close();
    });
  });
};

insertData();

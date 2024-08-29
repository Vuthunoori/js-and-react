function getFirstData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const firstData = "First data fetched";
      console.log(firstData);
      resolve(firstData);
    }, 2000);
  });
}

function getSecondData(firstData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const secondData = `${firstData} and Second data fetched`;
      console.log(secondData);
      resolve(secondData);
    }, 2000);
  });
}

async function getSequentialData() {
  try {
    const firstData = await getFirstData();
    const secondData = await getSecondData(firstData);
    console.log("All data processed:", secondData);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

getSequentialData();

// Promise 예제
//. Promise와 then, catch
//Promise는 아직 완료되지 않았지만 미래에 완료될 것으로 예상되는 작업을 나타냅니다. .then()을 사용하여 성공적인 결과를 처리하고, .catch()를 사용하여 오류를 처리합니다.
function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // 성공 여부를 결정하는 변수
          if (success) {
              resolve("데이터를 성공적으로 가져왔습니다.");
          } else {
              reject("데이터를 가져오는 데 실패했습니다.");
          }
      }, 1000);
  });
}

fetchData()
  .then(result => {
      console.log(result); // 성공 시: "데이터를 성공적으로 가져왔습니다."
  })
  .catch(error => {
      console.log(error); // 실패 시: "데이터를 가져오는 데 실패했습니다."
  });
//----------------------------------------------------------------------------
// async/await 예제
async function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // 성공 여부를 결정하는 변수
          if (success) {
              resolve("데이터를 성공적으로 가져왔습니다.");
          } else {
              reject("데이터를 가져오는 데 실패했습니다.");
          }
      }, 1000);
  });
}

async function getData() {
  try {
      const result = await fetchData(); // fetchData()가 완료될 때까지 기다림
      console.log(result); // 성공 시: "데이터를 성공적으로 가져왔습니다."
  } catch (error) {
      console.log(error); // 실패 시: "데이터를 가져오는 데 실패했습니다."
  }
}

getData();

export const decidetype = (type: string) => {
  if (type == 'one') {
    return 1;
  } else if (type == 'two') {
    return 2;
  } else {
    return 3;
  }
};

export const testError = () => {
  throw new Error('Error is thrown');
};

function solveit() {
  return new Promise((res) => {
    setTimeout(res, 200);
  });
}

export async function testAsync(){
    const res=await solveit();
  return res;
}

let data=-1;

export const  intialSetUp=()=>{
    data=10
};


export const testIntialSetUp=()=>{
    return data*10;
}

export const testIntialSetting=()=>{
  return data*20;
}

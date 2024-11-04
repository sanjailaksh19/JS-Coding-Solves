const promise = new Promise((resolve, reject) => {
    console.log('Promise started');
    resolve('Success');
    });
    promise.then(res => {
    console.log(res);
    });
    console.log('Promise created');
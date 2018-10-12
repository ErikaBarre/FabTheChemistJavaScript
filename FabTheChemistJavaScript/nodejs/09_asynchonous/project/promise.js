console.log(new Date());

var asyncAdd = (a, b) => {
    return new Promise((succes, failure) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                succes(a + b);
            } else {
                failure('not a numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((res) => {
    console.log(res);
}, (errorMassage) => {
    console.log(errorMassage);
});

asyncAdd('5', 7).then((res) => {
    console.log(res);
}, (errorMassage) => {
    console.log(errorMassage);
});

//chainage des promises
//on centralise les erreurs dans un try catch

asyncAdd(5, '7').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 45', res);
}).catch((errorMessage) => { //on place un catchn quand on chaine les promise sinon js passe tout de meme de promise en promise meme si le précédent à échoué. avec le catch js arrête le code au 1er échec d'une promises
  console.log(errorMessage);
});


//promise est une fonction qui prend en argument une fonction
//la focntion interroge une DB ou bien une url pour ramencer des infos
//la fonction appelle resolve quand tout s'est bien passée et que les données sont ramenée
//la fonction appelle reject quand les données ne peuvent pas revenir à cause d'un problème de connection par exemple.
//la promis est soit resolved ou rejected, il s'agit de 2 état 

var somePromise = new Promise((resolve, reject) => {
    resolve('Success');
    reject('Failure');
});

somePromise.then((message) => {
    console.log('sucess1', message);
});

var somePromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //pour forcer failure mettre en commentaire resolve
        //resolve et rejet ne seront jamais exécuter ensemble , c'est soit l'un ou l'autre qui sera exécuté
        //pareil si accidentellement on place 2 fois resolve il ne sera exécuter qu'une seul fois (ceci évite beaucoup d'erreur comme avec les anciens appel aux callback)
        resolve('Success');
        resolve('Success545');
        reject('Failure');
    }, 2500);
});

somePromise2.then(
    (successMessage) => {
        console.log('sucess :', successMessage);
    },
    (failureMessage) => {
        console.log('failure :', failureMessage);
    });
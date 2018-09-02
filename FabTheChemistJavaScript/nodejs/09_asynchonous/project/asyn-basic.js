console.log('Starting app');

//les callback sont toujours asynchrone
//le commentaire "inside callback" s'ajoputera après "Finished app". Le code continue et n'attend pas le callback
setTimeout(() => {
    console.log('Inside callback');
},2000)

setTimeout(() => {
    console.log('Inside callback1');
},0)

console.log('Finished app');

//Middleware starts
const logger = store => next => action => {
    console.group('logger');
    console.log('currentState ==', store.getState());
    console.log('next(action) // action ==', action);
    next(action);
    console.log('nextState ==', store.getState());
    console.groupEnd('logger');
};

const crashReporter = store => next => action => {
    try{
        next(action);
    }catch(err){
        console.group('crashReporter');
        console.error('error occured with action == ', action);
        console.error(err);
        console.groupEnd('crashReporter');
    }
};

const thunk = store => next => action => {
    if(typeof action === 'function'){
        action(store.dispatch, store.getState());
    }else{
        next(action);
    }
};
//Middleware ends
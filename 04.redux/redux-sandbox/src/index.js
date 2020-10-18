import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
};

const dispatchInc = bindActionCreator(inc, dispatch);
const dispatchDec = bindActionCreator(dec, dispatch);
const dispatchRnd = bindActionCreator(rnd, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', dispatchInc)

document
    .getElementById('dec')
    .addEventListener('click', dispatchDec)

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10);
        dispatchRnd(payload)
    })

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
}

store.subscribe(update);
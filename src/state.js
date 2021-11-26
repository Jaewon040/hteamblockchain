import {atom, selector, useRecoilState} from 'recoil';
import moment from 'moment';

let topic = atom({
    key : "topic",
    default : "",
})

let sDate = atom({
    key : "sDate",
    default : moment(),
})

let dDate = atom({
    key : "dDate",
    default : moment(),
})

let num = atom({
    key : "num",
    default : 0,
})


let eth = atom({
    key : "eth",
    default : 0.0,
})


let description = atom({
    key : "description",
    default : "",
})

export {topic, sDate, dDate, num, eth, description}
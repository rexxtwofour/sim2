const initialState = {
title = '',
nameInput = '',
addressInput = '',
cityInput = '',
stateinput = '',
zipinput = '',
image_urlinput = '',
mortgage_amountinput = '',
monthly_rentinput = ''
}


const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_STATE = 'CHANGE_STATE';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_ZIP = 'CHANGE_ZIP';
const CHANGE_IMAGEURL = 'CHANGE_IMAGEURL';
const CHANGE_MORTGAGE_AMOUNT = 'CHANGE_MORTGAGE_AMOUNT';
const CHANGE_MONTHLY_RENT = 'CHANGE_MONTHLY_RENT';


export default function ( state = intialState, action ) {
    switch(action.type ) {
        case CHANGE_NAME: 
        return {...state, nameInput: action.payload};







        



        default: return state;
    }
}


export function name( type,value ) {
    switch(type) {
        case 'name':
        return {
            type: CHANGE_NAME,
            payload: value 
        }
        
        case 'address':
        return {
            type: CHANGE_ADDRESS,
            payload: value
        }
        
        case 'city':
        return {
            type: CHANGE_CITY,
            payload: value
        }
        case 'state':
        return {
            type: CHANGE_STATE,
            payload: value
        }

        case 'zip':
        return {
            type: CHANGE_ZIP,
            payload: value
        }

        case 'image_url':
        return {
            type: CHANGE_IMAGEURL,
            payload: value
        }

        case 'mortgage_amount':
        return {
            type: CHANGE_MORTGAGE_AMOUNT,
            payload: value
        }

        case 'monthly_rent':
        return {
            type: CHANGE_MONTHLY_RENT,
            payload: value
        }


    }
}
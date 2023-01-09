const initialState = {
    RequestServices: [
        {id:1, service: 'Разработка сайта'},
        {id:2, service: 'Продвижение и реклама'},
        {id:3, service: 'Графический дизайн'},
        {id:4, service: 'Другое'},
    ],
    RequestPrice: [
        {id:1, service: 'Ниже 100 тыс'},
        {id:2, service: '100 - 200 тыс'},
        {id:3, service: '200 - 500 тыс'},
        {id:4, service: 'От 500 тыс'},
    ]
}

export const RequestReducer = (state = initialState, action) =>{
    return state;
}
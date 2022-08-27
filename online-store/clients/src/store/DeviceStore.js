import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", rating: 5, price: 25000},
            {id: 2, name: "Iphone 12 pro", rating: 4, price: 25000},
            {id: 3, name: "Iphone 12 pro", rating: 3, price: 25000},
            {id: 4, name: "Iphone 12 pro", rating: 2, price: 25000},
            {id: 5, name: "Iphone 12 pro", rating: 3, price: 25000},
            {id: 6, name: "Iphone 12 pro", rating: 2, price: 25000}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedDevice = {}
        makeAutoObservable(this)
    }

setTypes(types) {
    this._types = types
}
setBrands(brands) {
    this._brands = brands
}
setDevices(devices) {
    this._devices = devices
}
setSelectedType(type) {
    this._selectedType = type
}
setSelectedBrand(brand) {
    this._selectedBrand = brand
}
setSelectedDevice(device) {
    this._selectedDevice = device
}

get types () {
    return this._types
    }
get brands() {
    return this._brands
    } 
get devices() {
    return this._devices
    } 
get selectedType() {
    return this._selectedType
    } 
get selectedBrand() {
    return this._selectedBrand
    } 
get setSelectedDevice() {
    return this._selectedDevice
    } 
}
const myGadget = {
  gadgetName: 'Iphone',
  model: 13,
  color: 'white',
  getInfo: function (){
    console.log(Object.entries(this));
  },
  get modelCount() {
    return this.model;
  }
  }

myGadget.getInfo();

myGadget.newProp = "Nova Vlastivist";

myGadget.getInfo();
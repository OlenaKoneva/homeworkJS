function converter(meagurment, value) {
  switch (meagurment) {
    case 'km':
      console.log(value *1000)
      break;
    case 'kg':
      console.log(value *1000)
      break;
    case 'hour':
      console.log(value *60)
      break;
    default:
      console.log('нема такої величини');
  }
}
converter('km', 9);
converter('kg', 4);
converter('hour', 4);


  
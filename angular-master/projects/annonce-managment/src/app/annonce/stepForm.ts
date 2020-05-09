const Properties_LIST = [
    { name: 'Wifi' },
    { name: 'bathroom' },
    { name: 'phone' },
    { name: 'library' },
    { name: 'train  station' },
    { name: 'bus  station' }
  ];
  const genre=[{name:'foyer'},{name:'house'}];

  const UNI_LIST = [
    { name: 'fst' },
    { name: 'ensit' },
    { name: 'enit' },
    { name: 'ensi' },
    { name: 'isamm' },
    { name: 'isi' },
    { name: 'essect' }
  ];
  
  const DATA_STEP_1 = {
    email: { 
        type: 'email', 
        validations: {
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        },
         errors: {
            pattern: 'Please enter a valid email'
         }, 
         placeholder: 'Contact Email' },
   phone: {
      type: 'phone',
      validations: {
        pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
      },
      errors: {
        pattern: 'Please enter a valid phone number'
      },
      placeholder: 'Contact Number'
    }
   
  };
  
  const DATA_STEP_2 = {
    address: { type: 'text', validations: {}, errors: {}, placeholder: 'Full Address' },
    poperties: {
      type: 'select',
      options: Properties_LIST,
      validations: {},
      errors: {},
      placeholder: 'properties'
    },
    price: { type: 'text', validations: {}, errors: {}, placeholder: 'Price' },
    university: {
        type: 'select',
        options: UNI_LIST,
        validations: {},
        errors: {},
        placeholder: 'universities'
      },
      image:{type:'file',validations: {}, errors: {}, placeholder: 'choose images'},
      girls:{type:'radio',validations: {}, errors: {}},
      boys:{type:'radio',validations: {}, errors: {}},

      type: {
        type: 'select',
        options: genre,
        
        validations: {},
        errors: {},
        placeholder: 'choose type'
      },
      numberOfPlace:{type:'number',validations: {}, errors: {},placeholder:'enter number'}

  };
  
  const DATA_STEP_3 = {
    description: {
      type: 'textarea',
      validations: {},
      errors: {},
      placeholder: 'Enter description'
    }
  };
  
  const STEP_ITEMS = [
    { label: 'Please fill with contact info', data: DATA_STEP_1 },
    { label: 'Please fill with local info', data: DATA_STEP_2 },
    { label: 'Please fill with description', data: DATA_STEP_3 },
    { label: 'Review and Submit', data: {} }
  ];
  
  export { STEP_ITEMS }
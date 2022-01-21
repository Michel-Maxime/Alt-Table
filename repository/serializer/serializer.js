const _serializeSingle = (meal) => {
    return {
      //'id': meal._id,
      'name': meal.name,
      //'description': meal.description
    };
  };
  
  const serializer = (data) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
  }
  
  module.exports = serializer

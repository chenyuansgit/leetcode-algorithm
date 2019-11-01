
function only(obj, keys){
    obj = obj || {};
    if ('string' == typeof keys) keys = keys.split(/ +/);
    return keys.reduce(function(ret, key){
        if (null == obj[key]) return ret;
        ret[key] = obj[key];
        return ret;
    }, {});
}

console.log(only({a:'1', b:'2'}, ['a', 'b', 'c']));
console.log(only.toString());
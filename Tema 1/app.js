const distance = (s, t) => {
    if (typeof s === 'string' && typeof t === 'string' || s instanceof String && t instanceof String){
        const arr = [];
        for (let i = 0; i <= t.length; i++) {
          arr[i] = [i];
          for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
              i === 0
                ? j
                : Math.min(
                    arr[i - 1][j] + 1,
                    arr[i][j - 1] + 1,
                    arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                  );
                }
            }
            return arr[t.length][s.length];
        }   
        else throw new Error('InvalidType');
};
                

  
module.exports.distance = distance
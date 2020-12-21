const isCyclic = (obj: any) => {
  const seenObjects: Array<any> = [];

  const detect = (obj: any, path: string = '') => {
    if (obj && typeof obj === 'object') {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }
      seenObjects.push(obj);
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && detect(obj[key], `${path}.${key}`)) {
          console.warn(
            `NATIVE THEME - Cycle detected in override object with path ${path}.`,
          );
          return true;
        }
      }
    }
    return false;
  };

  return detect(obj, '');
};
export {isCyclic};
export default isCyclic;

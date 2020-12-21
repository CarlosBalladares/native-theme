export function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export default function deepMerge(target: any, source: any, path: string = '') {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        // if (!(key in target)) Object.assign(output, { [key]: source[key] });
        if (!(key in target))
          console.warn(
            `NATIVE THEME: The override ${path} does not exist in the theme. Make sure to add the path before overriding it.`,
          );
        else
          output[key] = deepMerge(target[key], source[key], `${path}.${key}`);
      } else {
        Object.assign(output, {[key]: source[key]});
      }
    });
  }
  return output;
}
export {deepMerge};

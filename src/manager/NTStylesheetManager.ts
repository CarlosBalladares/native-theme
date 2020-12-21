import AbstractStylesheeetManager from './AbstractStylesheeetManager';
import {StyleDefinitionObject} from '../utils/makeUseStylesFactory';
export default class NTStylesheetManager extends AbstractStylesheeetManager {
  constructor() {
    super();
  }

  hasStyle(useStylesID: string, hash: string): boolean {
    const hasUseStyle: boolean = this.activeStyleSheets.has(useStylesID);
    if (hasUseStyle == false) {
      return false;
    }
    const useStyleRecentSheet = this.activeStyleSheets.get(useStylesID);
    if (useStyleRecentSheet == null) {
      return false;
    }

    return useStyleRecentSheet[0] == hash;
  }

  getStyle(useStylesID: string, hash: string): StyleDefinitionObject | null {
    const hasUseStyle: boolean = this.activeStyleSheets.has(useStylesID);
    if (hasUseStyle == false) {
      return null;
    }
    const useStyleRecentSheet = this.activeStyleSheets.get(useStylesID);
    if (useStyleRecentSheet == null) {
      return null;
    }

    if (useStyleRecentSheet[0] != hash) {
      return null;
    }

    return useStyleRecentSheet[1];
  }
  setStyle(
    useStylesID: string,
    hash: string,
    style: StyleDefinitionObject,
  ): void {
    this.activeStyleSheets.delete(useStylesID);
    this.activeStyleSheets.set(useStylesID, [hash, style]);
  }
  removeStyle(useStylesID: string): boolean {
    return this.activeStyleSheets.delete(useStylesID);
  }
}

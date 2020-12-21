import {StyleDefinitionObject} from '../utils/makeUseStylesFactory';
abstract class StyleSheetManager {
  protected activeStyleSheets: Map<string, [string, StyleDefinitionObject]>;
  /**
   * Constructor initialized class styles
   */
  constructor() {
    this.activeStyleSheets = new Map<string, [string, StyleDefinitionObject]>();
  }
  /**
   * @param  {string} useStylesID id asigned to each useStyles hook function
   * @param  {string} hash hash assigned to arguments the hook depends on
   * @returns boolean that indicates whether the style has been already computed
   */
  abstract hasStyle(useStylesID: string, hash: string): boolean;
  /**
   * @param  {string} useStylesID id asigned to each useStyles hook function
   * @param  {string} hash hash assigned to arguments the hook depends on
   * @returns StyleDefinitionObject for the useStylesID and hash, null otherwise
   */
  abstract getStyle(
    useStylesID: string,
    hash: string,
  ): StyleDefinitionObject | null;
  /**
   * @param  {string} useStylesID id asigned to each useStyles hook function
   * @param  {string} hash hash assigned to arguments the hook depends on
   * @param  {StyleDefinitionObject} style StyleDefinitionObject to save
   * @returns void
   */
  abstract setStyle(
    useStylesID: string,
    hash: string,
    style: StyleDefinitionObject,
  ): void;
  /**
   * @param  {string} useStylesID id asigned to each useStyles hook function
   * @returns boolean with value true if style exists and has been removed, false otherwise.
   */
  abstract removeStyle(useStylesID: string): boolean;
}

export default StyleSheetManager;

interface IRegion {
  bolge: String;
  nesil: Number;
  cimen: String;
  ates: String;
  su: String;
}

interface IRegions {
  regions: IRegion[];
}

export type { IRegion, IRegions };

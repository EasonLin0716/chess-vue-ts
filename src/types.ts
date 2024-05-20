export type ChessPiece =
  | "r"
  | "n"
  | "b"
  | "q"
  | "k"
  | "p"
  | "R"
  | "N"
  | "B"
  | "Q"
  | "K"
  | "P"
  | "";
export type SquareX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type SquareY = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type ChessSquare = {
  piece: ChessPiece;
  x: SquareX;
  y: SquareY;
};
export type ChessBoard = ChessSquare[][];

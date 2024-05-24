export type ChessPieceKey =
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
  piece: ChessPieceKey;
  x: SquareX;
  y: SquareY;
};
export type ChessBoard = ChessSquare[][];
export interface PieceProps {
    piece: string;
    isMoving: boolean;
}
export interface PieceEmits {
    (event: 'startMove'): void;
}
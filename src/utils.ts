import { ChessBoard, ChessPieceKey } from "./constants";
import PiecePawn from './components/piece/PiecePawn.vue';
import PieceRook from "./components/piece/PieceRook.vue";
import PieceKnight from "./components/piece/PieceKnight.vue";
import PieceBishop from "./components/piece/PieceBishop.vue";
import PieceQueen from "./components/piece/PieceQueen.vue";
import PieceKing from "./components/piece/PieceKing.vue";

export const getInitialBoard = (): ChessBoard => [
  // 8th row - Black pieces
  [
    { piece: "r", x: "a", y: "8" },
    { piece: "n", x: "b", y: "8" },
    { piece: "b", x: "c", y: "8" },
    { piece: "q", x: "d", y: "8" },
    { piece: "k", x: "e", y: "8" },
    { piece: "b", x: "f", y: "8" },
    { piece: "n", x: "g", y: "8" },
    { piece: "r", x: "h", y: "8" },
  ],

  // 7th row - Black pawns
  [
    { piece: "p", x: "a", y: "7" },
    { piece: "p", x: "b", y: "7" },
    { piece: "p", x: "c", y: "7" },
    { piece: "p", x: "d", y: "7" },
    { piece: "p", x: "e", y: "7" },
    { piece: "p", x: "f", y: "7" },
    { piece: "p", x: "g", y: "7" },
    { piece: "p", x: "h", y: "7" },
  ],

  // 6th row - Empty
  [
    { piece: "", x: "a", y: "6" },
    { piece: "", x: "b", y: "6" },
    { piece: "", x: "c", y: "6" },
    { piece: "", x: "d", y: "6" },
    { piece: "", x: "e", y: "6" },
    { piece: "", x: "f", y: "6" },
    { piece: "", x: "g", y: "6" },
    { piece: "", x: "h", y: "6" },
  ],

  // 5th row - Empty
  [
    { piece: "", x: "a", y: "5" },
    { piece: "", x: "b", y: "5" },
    { piece: "", x: "c", y: "5" },
    { piece: "", x: "d", y: "5" },
    { piece: "", x: "e", y: "5" },
    { piece: "", x: "f", y: "5" },
    { piece: "", x: "g", y: "5" },
    { piece: "", x: "h", y: "5" },
  ],

  // 4th row - Empty
  [
    { piece: "", x: "a", y: "4" },
    { piece: "", x: "b", y: "4" },
    { piece: "", x: "c", y: "4" },
    { piece: "", x: "d", y: "4" },
    { piece: "", x: "e", y: "4" },
    { piece: "", x: "f", y: "4" },
    { piece: "", x: "g", y: "4" },
    { piece: "", x: "h", y: "4" },
  ],

  // 3rd row - Empty
  [
    { piece: "", x: "a", y: "3" },
    { piece: "", x: "b", y: "3" },
    { piece: "", x: "c", y: "3" },
    { piece: "", x: "d", y: "3" },
    { piece: "", x: "e", y: "3" },
    { piece: "", x: "f", y: "3" },
    { piece: "", x: "g", y: "3" },
    { piece: "", x: "h", y: "3" },
  ],

  // 2nd row - White pawns
  [
    { piece: "P", x: "a", y: "2" },
    { piece: "P", x: "b", y: "2" },
    { piece: "P", x: "c", y: "2" },
    { piece: "P", x: "d", y: "2" },
    { piece: "P", x: "e", y: "2" },
    { piece: "P", x: "f", y: "2" },
    { piece: "P", x: "g", y: "2" },
    { piece: "P", x: "h", y: "2" },
  ],

  // 1st row - White pieces
  [
    { piece: "R", x: "a", y: "1" },
    { piece: "N", x: "b", y: "1" },
    { piece: "B", x: "c", y: "1" },
    { piece: "Q", x: "d", y: "1" },
    { piece: "K", x: "e", y: "1" },
    { piece: "B", x: "f", y: "1" },
    { piece: "N", x: "g", y: "1" },
    { piece: "R", x: "h", y: "1" },
  ],
];

export const pieceMap: Record<ChessPieceKey, any> = {
  "": "",
  p: PiecePawn,
  r: PieceRook,
  n: PieceKnight,
  b: PieceBishop,
  q: PieceQueen,
  k: PieceKing,
  P: PiecePawn,
  R: PieceRook,
  N: PieceKnight,
  B: PieceBishop,
  Q: PieceQueen,
  K: PieceKing,
};

export const getPieceComponentName = (piece: ChessPieceKey): string => {
  return pieceMap[piece as ChessPieceKey];
};

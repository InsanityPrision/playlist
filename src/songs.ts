import { before } from "node:test";

export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean;
  const includesNothing = songTitle.length === 0;

  isEmpty = includesNothing;

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean;
  doesExist = songTitles.includes(songTitle);

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;
  const songTitleLength = songTitle.length;
  const minimumCharactersTitle = 3;
  let isMinimumCharachers = songTitleLength < minimumCharactersTitle;

  isShort = isMinimumCharachers;

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;
  const maxSongsinPlaylist = 5;
  let isFullTrueOrFalse = songTitles.length === maxSongsinPlaylist;

  isFull = isFullTrueOrFalse;

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number;

  songsCount = 0;
  for (let count = 0; count <= songTitles.length; count++) {
    songsCount = count;
  }
  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Ha habido un error";
  }
  return errorMessage;
};

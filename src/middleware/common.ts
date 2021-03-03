import express, { Router, json } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

export const handleMorgan = (router: Router) => {
  router.use(morgan('tiny'));
};

export const handleStatic = (router: Router) => {
  router.use(express.static('public'));
};

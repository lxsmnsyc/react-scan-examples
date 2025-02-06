/// <reference types="vinxi/types/client" />
import { scan } from 'react-scan';
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()

scan({
  enabled: true,
});

hydrateRoot(document, <StartClient router={router} />)

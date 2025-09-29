# Flerspråklig Admin System

## Oversikt
Dette prosjektet har nå støtte for norsk og engelsk språk, med et enkelt admin-system for å redigere all tekst på siden.

## Tilgang til admin
1. Gå til `/admin` i nettleseren
2. Standard passord er `admin123` (ENDRE DETTE I PRODUKSJON!)
3. For å endre passord, rediger `ADMIN_PASSWORD` i `.env.local`

## Hvordan redigere tekst
1. Logg inn på `/admin`
2. Velg språk (Norsk eller Engelsk) øverst
3. Bruk søkefeltet for å finne tekst du vil endre
4. Rediger teksten direkte i tekstfeltene
5. Klikk "Lagre alt" for å lagre endringene

## Språkvelger
- Språkvelger vises i navigasjonen (header)
- Brukere kan bytte mellom norsk og engelsk
- Valgt språk lagres i nettleseren

## Teknisk informasjon
- Oversettelser lagres i `/public/locales/no/translation.json` og `/public/locales/en/translation.json`
- Admin-siden bruker API routes for å lese/skrive disse filene
- Ingen database kreves - alt lagres i JSON-filer
- Git versjonskontroll håndterer historikk

## Sikkerhet
- Admin-siden er passordbeskyttet
- Passord må settes via miljøvariabel `ADMIN_PASSWORD`
- I produksjon: Bruk et sterkt passord!

## Legge til ny tekst
For å legge til ny tekst i koden:
```javascript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return <h1>{t('my.new.text')}</h1>
}
```

Deretter legg til oversettelsen i begge språkfilene eller bruk admin-panelet.
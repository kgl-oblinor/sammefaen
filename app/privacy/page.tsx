export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Personvernerklæring</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Sist oppdatert: {new Date().toLocaleDateString('nb-NO')}
          </p>

          <h2>1. Informasjon vi samler inn</h2>
          <p>Vi samler inn følgende informasjon:</p>
          <ul>
            <li>E-postadresse (når du melder deg på nyhetsbrev eller ber om demo)</li>
            <li>Anonym bruksdata via cookies (hvis du samtykker)</li>
          </ul>

          <h2>2. Hvordan vi bruker informasjonen</h2>
          <p>Vi bruker informasjonen til å:</p>
          <ul>
            <li>Sende deg nyhetsbrev og oppdateringer</li>
            <li>Kontakte deg angående demo-forespørsler</li>
            <li>Forbedre brukeropplevelsen på nettsiden</li>
            <li>Analysere trafikk og bruksmønstre</li>
          </ul>

          <h2>3. Cookies</h2>
          <p>Vi bruker følgende typer cookies:</p>
          <ul>
            <li><strong>Nødvendige cookies:</strong> Kreves for at nettsiden skal fungere</li>
            <li><strong>Analyse-cookies:</strong> Hjelper oss å forstå hvordan nettsiden brukes</li>
            <li><strong>Markedsførings-cookies:</strong> Brukes for målrettet markedsføring</li>
          </ul>

          <h2>4. Dine rettigheter</h2>
          <p>Du har rett til å:</p>
          <ul>
            <li>Be om innsyn i data vi har om deg</li>
            <li>Be om at vi sletter dine data</li>
            <li>Melde deg av nyhetsbrev når som helst</li>
            <li>Trekke tilbake samtykke til cookies</li>
          </ul>

          <h2>5. Kontakt oss</h2>
          <p>
            Har du spørsmål om personvern? Kontakt oss på:{' '}
            <a href="mailto:privacy@oblinor.com" className="text-primary hover:underline">
              privacy@oblinor.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
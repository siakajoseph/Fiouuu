# FIOUUU — V8 SEO/GEO

Site vitrine HTML/CSS/JavaScript de l'agence de communication FIOUUU à Abidjan. La V8 validée demeure la référence graphique : accueil et huit réalisations clients inchangés, captures d'origine et animation du logo. Les cinq familles de services ont désormais chacune une page éditoriale dédiée, sans réintroduire les grilles de la V9. Chaque page présente un visuel conceptuel généré spécialement dans la charte FIOUUU (bleu nuit, gris, blanc, accents orange), les prestations, la démarche et une FAQ.

## Déploiement cPanel

Site statique : aucun PHP, serveur de compilation, ni base de données requis. Déposer `index.html`, les fichiers CSS et JS, `robots.txt`, `sitemap.xml`, `llms.txt`, `assets/` et `services/` dans la racine du domaine `fiouuu.com`. Préserver les sous-domaines clients et les règles d'hébergement existantes. Si la V9 a déjà été installée, retirer uniquement ses anciennes pages non utilisées après sauvegarde et vérification de leurs emplacements. Si elles ont été indexées, configurer des redirections pertinentes vers les pages ou sections existantes après vérification de la configuration Apache. Le générateur `build-services.mjs` permet de reconstruire les cinq pages et `dist/` avec `node build-services.mjs` ; il n'est pas nécessaire à l'hébergement.

## Référencement

- Titre et description SEO, URL canonique `https://fiouuu.com/`, Open Graph, Twitter Card et données structurées Organisation, WebSite, WebPage et catalogue de services.
- Les contenus et liens sont directement présents dans le HTML ; les sections de la page ont des ancres stables.
- Le sitemap contient les six URL canoniques réelles (accueil et cinq services). Chaque service bénéficie de métadonnées, d'un visuel social et de données structurées propres. Les ancres ne sont pas des pages distinctes.
- `robots.txt` autorise les robots de recherche, dont OAI-SearchBot. L'indexation et les citations IA ne sont pas garanties.
- Google Search Console et Bing Webmaster Tools : vérifier le domaine et soumettre `https://fiouuu.com/sitemap.xml`. Google Business Profile : compléter la fiche réelle de l'agence si éligible. Aucun identifiant de vérification ou d'analytics fictif.

Contact : info@fiouuu.com · +225 01 41 00 05 03.

## SEO & AI Visibility — lot 1 (27 novembre 2026)

- Offre SEO/GEO publiée dans le code de la page Digital & web, FAQ dédiée et ancres individuelles du portfolio.
- `llms.txt` : résumé éditorial expérimental, non requis par OpenAI et sans garantie de citation.
- Voir [SEO-GEO.md](SEO-GEO.md) pour les contrôles de production, la soumission des URL et la mesure. Ne pas déployer ce document interne sur le site public.

## Lot 2 — AI Visibility

Page commerciale statique `services/ai-visibility/index.html` avec trois tarifs indicatifs, FAQ, métadonnées, schéma Service et maillage. Le générateur conserve cette page et l’inclut dans le sitemap (sept URL). Le visuel original `assets/service-ai-visibility.webp` est fourni séparément ; le visuel existant est utilisé tant que le fichier n'est pas déposé. Les tarifs sont soumis à validation avant mise en production. Déployer aussi le nouveau sitemap et llms.txt.

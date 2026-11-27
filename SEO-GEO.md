# FIOUUU — SEO & AI Visibility

## État du 27 novembre 2026

La V8 reste la référence graphique. Lot 1 : offre SEO/GEO dans la page Digital & web, FAQ, ancres des huit réalisations, llms.txt et documentation. Les six URL canoniques du sitemap sont conservées. Aucun changement de CSS, d'image ou de JavaScript. La production n'a pas été modifiée ni confirmée accessible lors du test web de cette session.

## Déploiement et contrôle

1. Sauvegarder le document root cPanel de fiouuu.com (sans toucher aux sous-domaines clients). Déployer index.html, services/digital-web/index.html et llms.txt, et vérifier que robots.txt et sitemap.xml du dépôt correspondent aux fichiers servis. Ne pas publier les fichiers de documentation ou le générateur.
2. Depuis un réseau externe, vérifier les codes HTTP, la présence des contenus et les types MIME :

    curl -sSIL https://fiouuu.com/
    curl -sS https://fiouuu.com/robots.txt
    curl -sS https://fiouuu.com/sitemap.xml
    curl -sS https://fiouuu.com/llms.txt
    curl -sSIL -A OAI-SearchBot https://fiouuu.com/services/digital-web/

   Le dernier test simule uniquement le user-agent, pas l'adresse IP réelle du robot. Contrôler les journaux et les protections WAF/CDN ; plages officielles : https://openai.com/searchbot.json. Les pages publiques doivent répondre sans authentification ni CAPTCHA. Ne pas affaiblir la protection globale ; limiter les exceptions aux robots vérifiés. robots.txt n'est pas une protection des espaces privés.
3. Vérifier la propriété du domaine via DNS sur https://search.google.com/search-console et https://www.bing.com/webmasters/ ; soumettre https://fiouuu.com/sitemap.xml. Inspecter les six URL. Ne pas créer de faux codes de vérification. IndexNow : générer la clé réelle sur le serveur et notifier les URL modifiées après déploiement uniquement.
4. Configurer la mesure des visites (outil d'analytics choisi par le propriétaire, avec les obligations de confidentialité applicables). Filtrer utm_source=chatgpt.com et les référents chatgpt.com, ainsi que Bing, Google et autres assistants. Mesurer visites et prises de contact ; aucun identifiant fictif.

## Suivi hebdomadaire

Relever date, plateforme, requête, présence de FIOUUU, URL citée, nombre de pages indexées (console), clics et contacts attribuables. Tester en contexte non personnalisé si possible, sans mentionner FIOUUU dans les requêtes de découverte. Ne pas déduire une absence d'indexation d'une seule recherche.

Requêtes : agence de communication à Abidjan ; création site internet Côte d’Ivoire ; création boutique WhatsApp Abidjan ; logiciel de gestion sur mesure Côte d’Ivoire ; création logo Abidjan ; agence SEO GEO Côte d’Ivoire. Comparer avec la requête de marque FIOUUU agence Abidjan.

## Offre commerciale

Audit initial : accessibilité, indexation, architecture, contenus et références externes. Mise en œuvre : corrections SEO, structure des pages, référencement local, optimisation éditoriale GEO et mesure. Accompagnement : rapports périodiques, évolution des contenus et suivi des demandes. Tarifs sur devis ; pas de promesse de classement ou citation.

## Prochains lots

- Études de cas individuelles à partir des informations validées et captures existantes ; pas de résultats chiffrés inventés.
- Page éditoriale dédiée SEO/GEO avec visuel original respectant la charte, maillage, sitemap et tests de non-régression.
- Fiches professionnelles et liens externes authentiques, avec comptes et accord des clients ; remplacer les liens sociaux factices seulement par des URL vérifiées.
- Tableau de bord de mesure et suivi des citations après mise en ligne.

## Sources officielles

- https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt
- https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- https://openai.com/searchbot.json

llms.txt est expérimental ; il ne remplace ni robots.txt ni le contenu public indexable.

## Lot 2 — AI Visibility

Page `/services/ai-visibility/` créée, liée depuis l'accueil et Digital & web. Tarifs indicatifs proposés : Starter 150 000 FCFA, Business 350 000 FCFA, Premium 250 000 FCFA/mois. À valider avant publication ; les frais tiers sont distincts. Ajouter le visuel original fourni séparément au chemin `assets/service-ai-visibility.webp`. Le sitemap inclut désormais sept pages ; soumettre et inspecter la nouvelle URL après déploiement. Le visuel social reste celui déjà présent jusqu'à intégration du nouveau fichier. Les demandes de devis ouvrent le logiciel de messagerie, sans collecte serveur. Pas de résultats de référencement revendiqués.

## Lot 3 — Journal FIOUUU

Études de cas reportées à la demande du propriétaire jusqu'à ajout des nouvelles réalisations. Blog et quatre articles rédigés : référencement ChatGPT, prix d’un site web, boutique WhatsApp et identité visuelle. Maillage depuis l’accueil et AI Visibility, sitemap 12 URL, BlogPosting, aucune statistique ou prix de marché inventé. Après déploiement, vérifier les 12 URL, soumettre le sitemap et inspecter les articles. Aucune publication externe ou mise en production effectuée.

## Lot 4 — Observatoire SEO/GEO

Observatoire interne autonome : six plateformes, tests marque/découverte, mentions/citations/absences, taux, historique, mesures réelles, exports. Les données indisponibles sont distinctes de zéro. Stockage local ; aucun déploiement ni accès aux comptes. Les études de cas sont toujours reportées.

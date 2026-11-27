# Observatoire SEO/GEO — V1

Ouvrir index.html dans un navigateur PC. Aucun serveur ni installation. Ne pas déployer tools/ dans public_html ou dist. Dépôt public : ne jamais pousser les exports contenant des données internes.

- Tester réellement une requête sur Google, Bing, ChatGPT, Gemini, Perplexity ou Copilot. Distinguer marque et découverte. Consigner contexte et URL citée. Le taux exclut les tests non concluants et ne représente que l'échantillon.
- Reporter les valeurs des consoles et analytics par source et période. Zéro = valeur mesurée ; vide = indisponible. Pour ChatGPT, utiliser utm_source=chatgpt.com et référents, sans double comptage. Documenter la méthode d'attribution des contacts. Ne pas additionner les périodes ou sources qui se chevauchent.
- Sauvegarder JSON régulièrement. Les données restent localement dans le navigateur, non chiffrées et non synchronisées ; le comportement du stockage avec file:// dépend du navigateur. Restaurer le JSON permet de déplacer les données. CSV exportable pour Excel ; PDF par impression navigateur.
- V1 manuelle, aucune API ni collecte automatique, aucun résultat fictif. Contrôles des calculs, des URL, du format d'import et du CSV exécutés ; test navigateur à réaliser. Connecter les consoles nécessite des propriétés vérifiées et un accès authentifié, puis une architecture sécurisée.

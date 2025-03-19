# 02-my-wallet

## Description

Le but est de développer une version simplifiée de MetaMask. Ce projet consiste à créer soit une extension de navigateur, soit une application web permettant aux utilisateurs de gérer leurs portefeuilles Ethereum et de faire des transactions simples.

## Objectifs

- Créer une version simplifiée d'un portefeuille Ethereum.
- Comprendre la gestion des clés et l'interaction avec la blockchain Ethereum.
- Maîtriser l'interaction entre l'interface utilisateur et la blockchain Ethereum.
- Développer une interface utilisateur pour la gestion de portefeuilles crypto.

## Notions abordées

- Structure d'un portefeuille Ethereum
- Cryptographie asymétrique
- Signature numérique
- Noeud RPC

## Fonctionnalités à implémenter

### 1. Création et importation de portefeuilles

- [ ] Implémenter une fonction pour générer une nouvelle paire de clés et créer un portefeuille.
- [ ] Permettre l'importation d'un portefeuille existant via une phrase mnémonique ou une clé privée.

### 2. Affichage du solde et de l'historique des transactions

- [ ] Implémenter une fonction pour récupérer le solde du portefeuille depuis un nœud Ethereum.
- [ ] Créer une interface pour afficher l'historique des transactions récentes.
- [ ] Mettre en place une mise à jour périodique des informations.

### 3. Envoi de transactions Ethereum

- [ ] Développer une interface pour envoyer des ETH à une adresse spécifiée.
- [ ] Implémenter la logique de signature des transactions avec la clé privée de l'utilisateur.
- [ ] Créer une fonction pour soumettre la transaction signée au réseau Ethereum.

### 4. Configuration du nœud RPC

- [ ] Ajouter une interface pour spécifier l'URL d'un nœud RPC Ethereum.
- [ ] Implémenter la logique pour basculer entre différents réseaux Ethereum.

### 5. Développement de l'interface utilisateur

- [ ] Créer une interface utilisateur intuitive pour toutes les fonctionnalités ci-dessus.
- [ ] Implémenter des formulaires pour la création/importation de portefeuilles et l'envoi de transactions.
- [ ] Développer une vue pour afficher les informations du portefeuille, y compris le solde et l'historique des transactions.
- [ ] Intégrer des éléments d'interface pour la configuration du nœud RPC et le changement de réseau.

## Contraintes techniques

- [ ] Utiliser [TypeScript](https://www.npmjs.com/package/typescript).
- [ ] Concevoir et implémenter vos propres interfaces et classes pour représenter le portefeuille, les transactions, et autres composants nécessaires.
- [ ] Utiliser un framework front-end ou une extension de navigateur pour le développement de l'interface utilisateur.

## Résultats attendus

Une application (extension de navigateur ou application web) permettant aux utilisateurs de gérer leurs portefeuilles Ethereum, d'afficher leurs soldes et transactions, et d'envoyer des transactions sur le réseau Ethereum. L'application doit avoir une interface utilisateur intuitive et fonctionnelle.

## Bonus

- [ ] Ajouter la prise en charge des jetons ERC-20.
- [ ] Implémenter la gestion de plusieurs comptes dans un seul portefeuille.
- [ ] Ajouter des notifications pour les transactions entrantes.
- [ ] Implémenter des mesures de sécurité pour la protection des clés privées.

## Ressources

- [Documentation d'Ethers.js](https://docs.ethers.io/v5/)
- [MetaMask Documentation](https://docs.metamask.io/) (pour référence)
- [Ethereum JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [Documentation sur le développement d'extensions de navigateur](https://developer.chrome.com/docs/extensions/mv3/getstarted/) (si vous choisissez cette option)

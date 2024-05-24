# Installer npm via nvm sur Windows

### 1. Installer `nvm` pour Windows

1. **Télécharger `nvm-windows`** :
   Téléchargez le programme d'installation de `nvm-windows` depuis le [référentiel GitHub de nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

2. **Installer `nvm-windows`** :
   Exécutez le programme d'installation et suivez les instructions. Par défaut, `nvm` sera installé dans `C:\Program Files\nvm`.

### 2. Configurer la politique d'exécution de PowerShell

1. **Ouvrir PowerShell en tant qu'administrateur** :
   Faites un clic droit sur l'icône PowerShell et sélectionnez "Exécuter en tant qu'administrateur".

2. **Changer la politique d'exécution** :
   Changez la politique d'exécution pour permettre l'exécution de scripts. Vous pouvez utiliser la politique `RemoteSigned` :

   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

   Confirmez le changement en tapant `Y` puis en appuyant sur Entrée.

### 3. Utiliser `nvm` pour installer et gérer Node.js

1. **Installer la dernière version de Node.js** :
   Ouvrez une nouvelle fenêtre PowerShell (pas besoin d'être en mode administrateur) et exécutez les commandes suivantes pour installer la dernière version de Node.js :

   ```powershell
   nvm install latest
   ```

2. **Utiliser la version installée** :
   Activez la version installée de Node.js :

   ```powershell
   nvm use latest
   ```

3. **Vérifier l'installation de Node.js et npm** :
   Vérifiez que Node.js et npm sont correctement installés :
   ```powershell
   node -v
   npm -v
   ```

### Commandes complètes à exécuter

```powershell
# Télécharger et installer nvm-windows depuis le site officiel :
# https://github.com/coreybutler/nvm-windows/releases

# Ouvrir PowerShell en tant qu'administrateur et régler la politique d'exécution
Set-ExecutionPolicy RemoteSigned

# Installer la dernière version de Node.js via nvm
nvm install latest

# Utiliser la version installée
nvm use latest

# Vérifier l'installation de Node.js et npm
node -v
npm -v
```
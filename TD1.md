<h1>Bloc 1 - TD 1</h1>  

<h2>Les méthodes GET et POST</h2>  
<p>Les méthodes HTTP GET et POST sont deux des principales méthodes utilisées pour communiquer avec des serveurs web. Voici quelques exemples concrets pour illustrer les différences entre ces deux méthodes :</p>
</br>
<h3>Exemple 1 : Soumission d'un formulaire</h3>
<h4>GET :</h4>
<p>Supposons que vous remplissiez un formulaire de contact sur un site web. Si le formulaire utilise la méthode GET pour envoyer les données au serveur, les informations que vous entrez (comme le nom, l'e-mail et le message) seront incluses dans l'URL. Par exemple :</p>
<blockquote>https://www.example.com/contact?name=John&email=john@example.com&message=Bonjour</blockquote>
<h4>POST :</h4>
<p>Si le formulaire utilise la méthode POST, les mêmes informations seraient envoyées au serveur, mais elles seraient incluses dans le corps de la requête et non dans l'URL. Cela signifie que l'URL resterait inchangée et que les données ne seraient pas visibles dans l'adresse.</p>
</br>
<h3>Exemple 1 : Soumission d'un formulaire</h3>
<h4>GET :</h4>
<p>Utiliser la méthode GET pour envoyer des données sensibles, comme des identifiants de connexion, n'est pas recommandé. Les informations sont visibles dans l'URL, ce qui les rend vulnérables à l'interception ou à l'enregistrement.</p>
<h4>POST :</h4>
<p>La méthode POST est préférée pour envoyer des données sensibles, car elles sont incluses dans le corps de la requête et ne sont pas visibles dans l'URL. Cela rend cette méthode plus sécurisée pour l'envoi de mots de passe, par exemple.</p>
<h4>Exemple 3 : Recherche sur un moteur de recherche :</h4> 
<h4>GET :</h4>
<p>Lorsque vous effectuez une recherche sur un moteur de recherche, comme Google, en utilisant la méthode GET, les termes de recherche sont généralement inclus dans l'URL. Par exemple, si vous recherchez "chat mignon", l'URL pourrait ressembler à ceci :</p>
<blockquote>https://www.google.com/search?q=chat+mignon</blockquote>
<p>Ici, les paramètres de recherche <bold>(q=chat+mignon)</bold> sont passés directement dans l'URL.</p>
<h4>POST :</h4> 
<p>Si vous utilisez une méthode POST pour effectuer la même recherche, les termes de recherche seraient inclus dans le corps de la requête plutôt que dans l'URL. Vous ne verriez pas les termes de recherche dans l'URL</p>
<h4>Conclusion :</h4>
<p>En résumé, la principale différence entre les méthodes GET et POST réside dans la manière dont les données sont transmises. GET les inclut dans l'URL, tandis que POST les envoie dans le corps de la requête. Le choix entre les deux dépend du type de données que vous envoyez et des besoins de votre application.</p>
</br>

<table>
        <tr>
            <th>Critères</th>
            <th>GET</th>
            <th>POST</th>
        </tr>
        <tr>
            <td>Visibilité des données</td>
            <td>Données visibles dans l'URL.</td>
            <td>Les données ne sont pas visibles dans l'URL.</td>
        </tr>
        <tr>
            <td>Sécurité</td>
            <td>Moins sécurisé car les données sont exposées dans l'URL et peuvent être interceptées.</td>
            <td>Plus sécurisé pour les données sensibles car elles ne sont pas exposées dans l'URL.</td>
        </tr>
        <tr>
            <td>Longueur des URL</td>
            <td>Limité par la longueur maximale d'une URL (environ 2048 caractères).</td>
            <td>Pas de limite imposée par la longueur de l'URL.</td>
        </tr>
        <tr>
            <td>Utilisation courante</td>
            <td>Utilisé pour les requêtes de recherche, navigation simple, et pour transmettre des données non sensibles.</td>
            <td>Utilisé pour les formulaires, l'envoi de données sensibles et pour les requêtes de modification de données.</td>
        </tr>
        <tr>
            <td>Caching</td>
            <td>Peut être mis en cache par le navigateur.</td>
            <td>Ne peut pas être mis en cache par le navigateur.</td>
        </tr>
        <tr>
            <td>Réutilisation des URLs</td>
            <td>Peut être copié et collé pour partager des résultats ou des liens.</td>
            <td>Moins propice à la réutilisation des URLs car les données sont incluses dans le corps de la requête.</td>
        </tr>
    </table>

</br>

<p>Le protocole HTTP (Hypertext Transfer Protocol) est extensible grâce à plusieurs mécanismes qui permettent d'ajouter de nouvelles fonctionnalités et de personnaliser le comportement des requêtes et des réponses. HTTP permet par exemple d'ajouter des en-têtes (headers) personnalisés dans les requêtes et les réponses. Ces en-têtes peuvent être utilisés pour transmettre des informations spécifiques à une application ou un service particulier.
Par exemple, on peut créer un en-tête personnalisé comme <b>"X-Custom-Header"</b> pour transporter des métadonnées spécifiques à une application.</p>

</br>
<p>Le terme "protocole sans état" (ou "stateless protocol" en anglais) signifie que chaque requête HTTP entre un client (comme un navigateur web) et un serveur web est indépendante et ne conserve pas d'informations sur les requêtes précédentes. En d'autres termes, chaque requête est traitée de manière isolée, sans que le serveur se souvienne des interactions antérieures avec le même client.</p>

<h2>Caractéristique "Sans État" d'HTTP</h2>

<p>Le terme "protocole sans état" (ou "stateless protocol" en anglais) signifie que chaque requête HTTP entre un client (comme un navigateur web) et un serveur web est indépendante et ne conserve pas d'informations sur les requêtes précédentes. En d'autres termes, chaque requête est traitée de manière isolée, sans que le serveur se souvienne des interactions antérieures avec le même client. Cette caractéristique a plusieurs implications et conséquences pour la navigation web :</p>

<h3>Simplicité</h3>
<p>L'absence d'état simplifie le protocole HTTP. Chaque requête contient toutes les informations nécessaires pour être comprise et traitée par le serveur, sans qu'il soit besoin de maintenir une session ou un contexte d'état complexe. Cela facilite la mise en œuvre et la compréhension du protocole.</p>
            
<h3>Évolutivité</h3>
<p>L'architecture sans état d'HTTP favorise l'évolutivité des serveurs web. Étant donné qu'ils n'ont pas à conserver l'état des clients entre les requêtes, les serveurs peuvent traiter un grand nombre de clients simultanément.</p>
<h3>Répartition de la charge</h3>
<p>Les serveurs web peuvent être configurés pour répartir la charge entre plusieurs serveurs en utilisant des méthodes comme l'équilibrage de charge. Cette répartition peut être effectuée indépendamment pour chaque requête, car elles sont sans état.</p>
<h3>Facilité de mise en cache</h3>
<p>Les réponses HTTP peuvent être mises en cache de manière efficace, car elles ne dépendent que de la requête actuelle et non de l'historique des requêtes. Cela améliore la performance en permettant aux navigateurs ou aux serveurs proxy de stocker temporairement les réponses et de les réutiliser pour des requêtes ultérieures identiques.</p>
<h3>Problèmes potentiels</h3>
<p>Cependant, l'absence d'état peut également poser des problèmes. Par exemple, lorsque des sessions utilisateur doivent être gérées (par exemple, pour les connexions utilisateur, les paniers d'achat, etc.), cela nécessite généralement l'ajout d'une couche d'abstraction supplémentaire, souvent sous la forme de cookies ou de sessions côté serveur, pour maintenir l'état entre les requêtes.</p>
<h3>Complexité côté client</h3>
<p>La gestion de l'état côté client (par exemple, via des cookies) peut rendre les applications web plus complexes du côté du client, car elles doivent conserver et transmettre des informations d'une page à l'autre.</p>

<h2>La décomposition d'une URL:</h2>
</br>
<p>L'URL se divise en 4 parties :</p>
<ul>
        <li><b>Le schéma :</b> Il est utilisé par le serveur et la page web pour transférer des données vers votre ordinateur.</li>
        <li><b>Nom d'hôte (host) :</b> Il s'agit de l'adresse IP ou du nom associé au serveur qui héberge la ressource. C'est ce qui permet de localiser physiquement la machine sur le réseau.</li>
        <li><b>Le chemin :</b> Le chemin est toute partie de l’URL qui vient après le nom de domaine, avant un point d’interrogation ou un # qui ajoute des informations supplémentaires à une URL</li>
</ul>

</br>
</br>
<h2>Sources</h2>
<p>https://www.anthedesign.fr/referencement/url/#:~:text=Dans%20une%20URL%2C%20on%20trouve,une%20forme%20de%20langage%20universel. </p>
<p>https://kinsta.com/fr/base-de-connaissances/description-url/#:~:text=Quand%20les%20utiliser-,Qu%27est%2Dce%20qu%27,une%20URL%20(Uniform%20Resource%20Locator)&text=Une%20URL%20mène%20à%20un,du%20site%20ou%20du%20serveur.</p>

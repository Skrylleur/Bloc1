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

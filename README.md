# Formsclassng

application de gestion des rendez-vous hors ligne 
consiste à créer deux composant un qui permet de voir une liste des rendez-vous de supprimer un rendez vous de voir ses détailles
et le créer dans un autre composant
# integration de bootstrap
# la pagination
# la recherche temps réel dans la liste
# un rendez vous:
-titre, date , description,lieu, montant / gratuit
# création du projet 
ng new (titre) --no-standalone
# création des composant et leurs routages
ng g c (titre):
-addRdv(page), readRdv(page), header(partie), footer(partie), details(page)
# création de la class rendezvous
ng g class (titre) : rdv
# le service du rendezvous 
ng g service (titre) rdvservice
# implementation du code
ajout modifier supprimer
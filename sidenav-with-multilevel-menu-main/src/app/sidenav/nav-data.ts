import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },

    {
        routeLink: 'users',
        icon: 'fa fa-users',
        label: 'utilisateur',
        items: [
     
            {
                routeLink: 'users/list',
                label: 'List Users'
            }
        ]
    },
    {
        routeLink: 'CDES',
        icon: 'fa fa-university',
        label: 'CDE',
        items: [
            {
                routeLink: 'cdes/create',
                label: 'Ajouter CDE'
            },
            {
                routeLink: 'cdes/list',
                label: 'List CDE'
            }
        ]
    },
    {
        routeLink: 'SRecherche',
        icon: 'fa fa-flask',
        label: 'Structure de Recherche',
        items: [
            {
                routeLink: 'SRecherche/create',
                label: 'Ajouter SRecherche'
            },
            {
                routeLink: 'SRecherche/list',
                label: 'Liste SRecherche'
            }
        ]
    },
    {
        routeLink: 'CadreMobilite',
        icon: 'fa fa-exchange-alt',
        label: 'Cadre de Mobilite',
        items: [
            {
                routeLink: 'CadreMobilite/create',
                label: 'Ajouter Cadre Mobilite '
            },
            {
                routeLink: 'CadreMobilite/list',
                label: 'Liste Cadres Mobilites'
            }
        ]
    },

    {
        routeLink: 'profil',
        icon: 'fa fa-graduation-cap',
        label: 'profil'
    },
    {
        routeLink: 'Projet',
        icon: 'fa fa-cogs',
        label: 'Projet de Mobilite',
        items: [
            {
                routeLink: 'Projet/create',
                label: 'Ajouter Projet '
            },
            {
                routeLink: 'Projet/list',
                label: 'Liste Projet '
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fa fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },
];
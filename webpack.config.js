module.exports = {
    //Le mode indique si on est en dev ou en prod, ça influera sur
    //la taille du fichier obtenu et sur la vitesse de compilation entre autre
    mode: 'development',
    //On indique le point d'entrée de notre appli, le script duquel
    //tout partira.
    entry: './src/js/index.js',
    output : {
        //on lui indique dans l'output le nom du bundle qui sera
        //généré dans le dossier dist
        filename: 'bundle.js'
    },
        module: {
            rules: [{
                test: /\.s?css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }]
        },
    //On lui précise cette ligne afin que les navigateurs fassent
    //correctement le lien entre les lignes du bundle et les
    //lignes de nos sources
    devtool:'inline-source-map'
};

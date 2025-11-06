// path lida com caminhos de arquivos de pastas de diferentes sistemas operacionais.
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true, // abre automaticamente a aba do projeto quando rodar a aplciação.
    liveReload: true, // Sempre que modificar, atualizar a aplicação.
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'), //incluir HTML no pacote.
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: path.resolve(__dirname, 'dist', 'src', 'assets'),
          noErrorOnMissing: true, // Evita o erro caso a pasta Assets estiver vazia ou inexistente.
        },
      ],
    }),
  ],

  module: {
    // configurações para carregar css.
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: '/node_modules', //excluir a pasta node_modules
      },
      // configurações do babel para compatibilidade em navegadores diversos.
      {
        test: /\.js$/i,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults ' }]],
          },
        },
      },
    ],
  },
}

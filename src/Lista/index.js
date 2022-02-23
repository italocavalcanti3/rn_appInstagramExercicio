import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };

    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIconeLike = this.carregaIconeLike.bind(this);
  }

  mostraLikes(likers) {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  like() {
    let feed = this.state.feed;

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      });
    }
  }

  carregaIconeLike(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: this.state.feed.imgPerfil }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode="cover"
          source={{ uri: this.state.feed.imgPublicacao }}
          style={styles.fotoPublicacao}
        />

        <View style={styles.areaIcones}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.carregaIconeLike(this.state.feed.likeada)}
              style={styles.iconeLike}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../img/send.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>

        {this.mostraLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

export default Lista;

const styles = StyleSheet.create({
  areaFeed: {
    marginBottom: 16
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
    paddingLeft: 10
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  areaIcones: {
    flexDirection: 'row',
    padding: 5
  },
  iconeLike: {
    width: 33,
    height: 33
  },
  btnSend: {
    paddingLeft: 10
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeRodape: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 8
  }
});

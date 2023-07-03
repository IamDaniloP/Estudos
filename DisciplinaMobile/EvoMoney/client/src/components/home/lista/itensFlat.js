import { StyleSheet, Text, View, Image} from 'react-native';
import { BotaoSaiba } from '../../botaoSaiba'

export function InformacaoUm () {
    return (
        <View style={styles.informationBox}>
          <Image source={require('../../../../assets/img/info1.png')} style={styles.boxImg} />
          <View>
            <Text style={styles.boxTitle}>Saiba para onde vai o seu dinheiro</Text>
            <Text style={styles.boxText}>Com o EvoMoney, você categoriza todos os seus lançamentos. Com gráficos simples, você sabe de onde vem e para onde vai o seu dinheiro.</Text>
            <View style={styles.buttonBox}>
              <BotaoSaiba/>
            </View>
          </View>
        </View>
    );
};

export function InformacaoDois () {
    return (
        <View style={styles.informationBox}>
          <Image source={require('../../../../assets/img/facil.png')} style={styles.boxImg} />
          <View>
            <Text style={styles.boxTitle}>Fácil de utilizar</Text>
            <Text style={styles.boxText}>O EvoMoney vai além do básico e permite que você faça controles incríveis, essenciais para sua organização das finanças. Simples como tem que ser!</Text>
            <View style={styles.buttonBox}>
                <BotaoSaiba/>
            </View>
          </View>
        </View>
    );
};

export function InformacaoTres () {
    return (
        <View style={styles.informationBox}>
          <Image source={require('../../../../assets/img/economize.png')} style={styles.boxImg} />
          <View>
            <Text style={styles.boxTitle3}>Economize seu tempo</Text>
            <Text style={styles.boxText}>Tempo é dinheiro! Com planejamento, você tem tudo sob controle e o tempo que precisa para alcançar as metas é muito menor!</Text>
            <View style={styles.buttonBox}>
                <BotaoSaiba/>
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    
      informationBox: {
        width: 340,
        marginTop: 13,
        marginBottom: 13,
        marginLeft: 18,
        marginRight: 18,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center',
    
      },
    
      boxImg: {
        width: 328,
        height: 214,
        resizeMode: 'contain',
      },
    
      boxTitle: {
        marginLeft: 12,
        marginRight: 12,
        fontSize: 23,
        fontWeight: 600,
        lineHeight: 24,
      },
    
      boxTitle3: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 10,
        fontSize: 23,
        fontWeight: 600,
        lineHeight: 24,
      },
    
      boxText: {
        marginTop: 6,
        marginBottom: 10,
        marginLeft: 12,
        marginRight: 12,
        fontSize: 15,
        textAlign: 'justify',
      },
    
      buttonBox: {
        width: 110,
        marginBottom: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      buttonText: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 18,
      },
});
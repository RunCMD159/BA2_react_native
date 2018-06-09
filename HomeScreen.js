import React from 'react';
import {Text, View} from 'react-native';

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Diese Applikation wurde mit dem Progressive Web App Framework und dem Angular Framework entwickelt.
                    Beim Wechsel in den zweiten Tab werden 10000 Testdaten generiert.
                    Zum Starten des Tests muss der "Test starten"-Button gedrückt werden.
                    Um den Test erneut durchführen zu können, kann der "Test zurücksetzten"-Button gedrückt werden, welcher erneut 10000 Testdaten erzeugt.
                    Im dritten Tab kann die native Hardware des mobilen Endgerätes getestet werden.
                    Die Standortdaten werden in diesem Tab angezeigt.
                    Ein Livestream der Kamera kann angesehen werden.
                    Mit dem "Foto aufnehmen"-Button kann eine Aufnahme gemacht werden
                    Beim Wechsel in den Tab wird eine Textdatei erstellt die über das Textfeld bearbeitet werden kann.
                    Mit dem "Speichern"-Button kann die Textdatei in das lokale Dateisystem geschrieben werden und
                    mit dem "Laden"-Button kann sie wieder ausgelesen werden.
                </Text>
            </View>
        );
    }
}
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHearder, Table} from './styles';

interface HeaderProps {
    selectedTable: string;
    onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
	return (
		<Container>
			{!selectedTable && (
				<>
					<Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
					<Text size={24} weight="700">
                            WAITER-APP
						<Text size={24}>APP</Text>
					</Text>
				</>
			)}

			{selectedTable && (
				<Content>
					<OrderHearder>
						<Text size={24} weight="600">Pedido</Text>
						<TouchableOpacity onPress={onCancelOrder}>
							<Text color="#FF6633" weight="600" size={14}>
                                cancelar pedido
							</Text>
						</TouchableOpacity>
					</OrderHearder>

					<Table>
						<Text color="#666">Mesa {selectedTable}</Text>
					</Table>
				</Content>
			)}
		</Container>
	);
}

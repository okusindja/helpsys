export interface InputProps {
  editable?: boolean;
  onPressIn?: () => void;
  textValue: string; // Valor atual do input
  onChangeText: (text: string) => void; // Função para manipular a mudança de valor
  placeholder: string; // Texto a ser mostrado no input
  color?: string;
}

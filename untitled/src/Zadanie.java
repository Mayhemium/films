import java.util.Scanner;

class Zadanie{
//    private static String fragmentate(String s){
////        System.out.println(s);
//        s = s.replace(" | ", ".  |.");
//        s = s.replace(" _|", ". _|");
//        s = s.replace("._|", ". _|");
//        s = s.replace("|_ ", "|_ .");
//        s = s.replace("|_.", "|_ .");
//        if(s.charAt(0) == '_')
//            s = " " + s;
//        if(s.charAt(s.length()-1) == '_')
//            s += " ";
//        s = s.replace("||", "|.|");
//        System.out.println(s);
//        return s;
//    }

    private static String GetNumbers(String s1, String s2, String s3){
        System.out.println(s2);
        String result = "";
        String segment = "";
        for(int i = 0; i < s2.length(); i++){
            if(s2.charAt(i) == ' ' && segment.length() > 1){
                System.out.println(segment);
                if(segment.equals("| |"))
                    result += '0';
                if(segment.equals("|_"))
                    result += '5';
                if(segment.equals("_|"))
                    result += '2';
                if(segment.equals("|_|"))
                    result += '4';
                segment = "";
                continue;
            }
            if(s2.charAt(i)=='|' && segment.length() > 0 && segment.charAt(segment.length()-1) == '|'){
                System.out.println(segment);
                if(segment.equals("| |"))
                    result += '0';
                if(segment.equals("|"))
                    result += '1';
                if(segment.equals("_|"))
                    result += '2';
                if(segment.equals("|_|"))
                    result += '4';
                segment = "|";
                continue;
            }
            segment += s2.charAt(i);
            if(segment.equals("| |"))
                result += '0';
            if(segment.equals("|"))
                result += '1';
            if(segment.equals("|_"))
                result += '5';
            if(segment.equals("_|"))
                result += '2';
            if(segment.equals("|_|"))
                result += '4';
        }
        System.out.println(segment);
        return result;








//        int topsCount = s1.split(" ").length;
//        s2 = fragmentate(s2);
//        s3 = fragmentate(s3);
//        String result = "";
//
//        result += GetNumber(s2.substring(0,3), s3.substring(0,3));
//        result += GetNumber(s2.substring(4,7), s3.substring(4,7));
//        result += GetNumber(s2.substring(8,11), s3.substring(8,11));
//        result += GetNumber(s2.substring(12,15), s3.substring(12,15));
//        result += GetNumber(s2.substring(16,19), s3.substring(16,19));
//        result += GetNumber(s2.substring(20,23), s3.substring(20,23));
//
//        for(int i = 0; i < result.length(); i++){
//            if( result.charAt(i) == '0' ||
//                result.charAt(i) == '2' ||
//                result.charAt(i) == '3' ||
//                result.charAt(i) == '5' ||
//                result.charAt(i) == '6' ||
//                result.charAt(i) == '8'){
//                topsCount--;
//            }
//        }
//        for(int i = 0; i < result.length(); i++){
//            if(topsCount > 0)  {
//                if(result.charAt(i) == '1'){
//                    result = result.replace("1","7");
//                    topsCount--;
//                }
//                if(result.charAt(i) == '4'){
//                    result = result.replace("4","9");
//                    topsCount--;
//                }
//            }
//        }
//
//        return result;
    }

    private static int GetNumber(String s1, String s2){
        //0
        if(s1.equals("| |"))
            return 0;
        //1 || 7
        if(s1.equals("  |")){
            return 1;//1 or 7
        }
        //2
        //3
        if(s1.equals(" _|"))
            if(s2.equals("|_ "))
                return 2;
            else
                return 3;
        //4
        //8
        //9
        if(s1.equals("|_|"))
            if(s2.equals("  |"))
                return 4;//4 or 9
            else
                return 8;
        //5
        //6
        if(s1.equals("|_ "))
            if(s2.equals(" _|"))
                return 5;
            else
                return 6;
        return -1;
//        //0
//        if(s1.equals("| |"))
//            return 0;
//        //1 || 7
//        if(s1.equals("  |")){
//            return 1;//1 or 7
//        }
//        //2
//        //3
//        if(s1.equals(" _|"))
//            if(s2.equals("|_ "))
//                return 2;
//            else
//                return 3;
//        //4
//        //8
//        //9
//        if(s1.equals("|_|"))
//            if(s2.equals("  |"))
//                return 4;//4 or 9
//            else
//                return 8;
//        //5
//        //6
//        if(s1.equals("|_ "))
//            if(s2.equals(" _|"))
//                return 5;
//            else
//                return 6;
//        return -1;
    }

    public static void main(String []args){
//        Scanner scanner = new Scanner(System.in);
//        while (true){
//            String s1 = scanner.nextLine();
//        System.out.println(fragmentate("_| _| _|| ||_||_"));
//        System.out.println(fragmentate("|_ _||_ |_| | _|"));
        System.out.println(GetNumbers(
                "_ _ _ _ _ _",
                "_| _| _|| ||_||_",
                "|_ _||_ |_| | _|"));
        System.out.println(GetNumbers(
                "_ _ _",
                "||_ |_||_ || |",
                "||_| ||_| ||_|"));
//        System.out.println(GetNumbers(
//                "_ _ _ _ _",
//                "||_||_||_ ||_|",
//                "| | | _| ||_|"));
//            String segment = "";
//            for (int i = 0; i < s1.length(); i++) {
//                char c = s1.charAt(i);
//                if(c != ' ')
//                    segment += c;
//            }


//            String s2 = scanner.nextLine();
//            String s3 = scanner.nextLine();

//            s2 = s2.replace("|_ ", "|_  ");
//            s2 = s2.replace(" _|", "  _|");
//            s2 = s2.replace("_|", " _|");
//
//            for(int i = 0; i < s2.length(); i++){
//            }
//            System.out.println(s1);
//            System.out.println(s2);
//            System.out.println(s3);
//            scanner.nextLine();
//        }
    }
}
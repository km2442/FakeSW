import axios from "axios";
export default {
    methods: {
        async getNextData(next) {
            let data = [];
            let newNext = null;
            const res = await axios.get(next).catch(error => {
                console.log(error);
            });

            data = res.data.results;
            newNext = res.data.next;

            return { data: data, next: newNext };
        }
    }
}
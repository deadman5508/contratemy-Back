import { options } from '../config/options.js';
export function getOptions(req, res) {
    const { fields } = req.query;
    if (fields) {
        // Se fields for string (uma única opção) ou array (várias)
        const fieldList = Array.isArray(fields)
            ? fields
            : fields.split(',').map(f => f.trim());
        const result = {};
        fieldList.forEach(f => {
            if (typeof f === 'string' && f in options) {
                result[f] = options[f];
            }
        });
        if (Object.keys(result).length === 0) {
            return res.status(400).json({ error: `Nenhum dos campos solicitados foi encontrado.` });
        }
        return res.status(200).json(result);
    }
    // Se não passar fields, retorna todas as opções
    return res.status(200).json(options);
}
//# sourceMappingURL=optionsController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const get_pages_1 = require("../../../workflows/page/get-pages");
const create_page_1 = require("../../../workflows/page/create-page");
const GET = async (req, res) => {
    const { result } = await (0, get_pages_1.getPageWorkflow)().run({
        input: {},
    });
    res.json({ data: result.pages || [] });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { result } = await (0, create_page_1.createPageWorkflow)(req.scope).run({
        input: req.body,
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3BhZ2VzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlFQUFrRTtBQUNsRSxxRUFBdUU7QUFNaEUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsMkJBQWUsR0FBRSxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUMsRUFBRTtLQUNYLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLEtBQUssSUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQTtBQUxZLFFBQUEsR0FBRyxPQUtmO0FBR00sTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQXlCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ3pFLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsZ0NBQWtCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUk7S0FDakIsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFMWSxRQUFBLElBQUksUUFLaEIifQ==